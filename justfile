# ── Build ────────────────────────────────────────────────────────

build:
    cd zeroclaw && cargo build
    cd mcp-servers && cargo build

release:
    cd zeroclaw && cargo build --release
    cd mcp-servers && cargo build --release

# ── Test ─────────────────────────────────────────────────────────

test:
    cd zeroclaw && cargo test
    cd mcp-servers && cargo test

# ── Lint ─────────────────────────────────────────────────────────

check:
    cd zeroclaw && cargo fmt --check && cargo clippy -- -D warnings
    cd mcp-servers && cargo fmt --check && cargo clippy -- -D warnings

fmt:
    cd zeroclaw && cargo fmt
    cd mcp-servers && cargo fmt

# ── Browser integration tests ────────────────────────────────────

browser-test:
    cd mcp-servers && just integration-test

browser-test-chrome:
    cd mcp-servers && just integration-test-chrome

browser-test-edge:
    cd mcp-servers && just integration-test-edge

browser-check *args:
    cd mcp-servers && just browser-check {{args}}

# ── Amplify integration tests ──────────────────────────────────

amplify-test:
    cd mcp-servers && just amplify-test

amplify-test-edge:
    cd mcp-servers && just amplify-test-edge

# ── Install ──────────────────────────────────────────────────────

install:
    cargo install --path zeroclaw
    cargo install --path mcp-servers/browser-server
    cargo install --path mcp-servers/config-server

# ── Clean ────────────────────────────────────────────────────────

clean:
    cd zeroclaw && cargo clean
    cd mcp-servers && cargo clean

# ── Upstream sync (zeroclaw) ─────────────────────────────────────
#
# Fetch latest from upstream and show divergence:
#   just upstream-fetch
#
# Cherry-pick a specific commit from upstream:
#   just upstream-pick <sha>

upstream-fetch:
    cd zeroclaw && git fetch origin && git log --oneline HEAD..origin/main | head -20

upstream-pick commit:
    cd zeroclaw && git cherry-pick {{ commit }}
