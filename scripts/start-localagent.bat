@echo off
REM start-localagent.bat - Launch all LocalAgent components.
REM Starts config-server and browser-server in the background,
REM then runs zeroclaw daemon in the foreground.
REM On exit, background processes are terminated.

setlocal

set "INSTALL_DIR=%~dp0"
set "LOG_DIR=%TEMP%\localagent"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

echo Starting LocalAgent...
echo.

REM Start config-server in background (log to file for diagnostics)
echo  [1/3] config-server (port 3100)
start /B "" "%INSTALL_DIR%config-server.exe" serve --port 3100 > "%LOG_DIR%\config-server.log" 2>&1

REM Start browser-server in background (auto-detect Edge on Windows)
set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE_PATH%" (
    set "BROWSER_ARG=--browser-path "%EDGE_PATH%""
) else (
    set "BROWSER_ARG="
)
echo  [2/3] browser-server (port 3200)
start /B "" "%INSTALL_DIR%browser-server.exe" serve --port 3200 %BROWSER_ARG% > "%LOG_DIR%\browser-server.log" 2>&1

REM Wait for MCP servers to bind to their ports
echo  Waiting for MCP servers to start...
timeout /t 3 /nobreak > nul

REM Check if servers are actually running
tasklist /FI "IMAGENAME eq config-server.exe" 2>nul | find /I "config-server.exe" > nul
if %ERRORLEVEL% equ 0 (
    echo  config-server: running
) else (
    echo  config-server: FAILED to start (see %LOG_DIR%\config-server.log)
)
tasklist /FI "IMAGENAME eq browser-server.exe" 2>nul | find /I "browser-server.exe" > nul
if %ERRORLEVEL% equ 0 (
    echo  browser-server: running
) else (
    echo  browser-server: FAILED to start (see %LOG_DIR%\browser-server.log)
)
echo.

REM Start zeroclaw daemon in foreground
echo  [3/3] zeroclaw daemon
echo.
"%INSTALL_DIR%zeroclaw.exe" daemon

REM Clean up background processes on exit
echo.
echo Shutting down background services...
taskkill /F /IM config-server.exe > nul 2>&1
taskkill /F /IM browser-server.exe > nul 2>&1
echo Done.

endlocal
