@echo off
REM run-test.bat - Run a test example against zeroclaw agent.
REM Usage: run-test.bat 01_simple_test.txt
REM        run-test.bat 02_form_filling.txt

setlocal enabledelayedexpansion

set "INSTALL_DIR=%~dp0.."
set "EXAMPLE_DIR=%~dp0"

if "%~1"=="" (
    echo Usage: run-test.bat ^<test-file^>
    echo.
    echo Available tests:
    for %%f in ("%EXAMPLE_DIR%*.txt") do echo   %%~nxf
    exit /b 1
)

set "TEST_FILE=%EXAMPLE_DIR%%~1"
if not exist "%TEST_FILE%" (
    echo Error: Test file not found: %TEST_FILE%
    exit /b 1
)

echo Running test: %~1
echo ──────────────────────────────────────
echo.

REM Read the test file content and pass it as the agent message
set "PROMPT="
for /f "usebackq delims=" %%a in ("%TEST_FILE%") do (
    if defined PROMPT (
        set "PROMPT=!PROMPT! %%a"
    ) else (
        set "PROMPT=%%a"
    )
)

"%INSTALL_DIR%\zeroclaw.exe" agent -m "!PROMPT!"
