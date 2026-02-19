# LocalAgent Test Examples

Test scripts to verify the LocalAgent installation works end-to-end.

## Prerequisites

1. MCP servers must be running (use `start-localagent.bat` or start them manually)
2. API key must be configured in `~/.zeroclaw/config.toml`

## Running Tests

### Option A: Using the test runner

```cmd
cd "C:\Program Files (x86)\LocalAgent\examples"
run-test.bat 01_simple_test.txt
```

### Option B: Inline CLI

```cmd
zeroclaw agent -m "Navigate to https://example.com. Take a screenshot and extract the page title and main heading using get_text with selector h1."
```

## Test Sequence

### 01 - Simple Connectivity Test

Verifies: browser launches, navigation works, screenshot capture, text extraction.

**Expected:** Page title = "Example Domain", heading = "Example Domain"

### 02 - Form Filling Test

Verifies: form field filling, click actions, multi-step workflows.

**Expected:** All form fields filled correctly on httpbin.org pizza order form.

## Troubleshooting

- **MCP server connection errors**: Ensure `config-server` and `browser-server` are running.
  Check with: `tasklist | findstr server`
- **Browser doesn't launch**: Chrome/Edge must be installed on the machine.
- **LLM errors**: Verify API key is set in config: `zeroclaw status`
