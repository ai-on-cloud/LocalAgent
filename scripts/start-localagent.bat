@echo off
REM start-localagent.bat - Launch all LocalAgent components.
REM Starts config-server and browser-server in the background,
REM then runs zeroclaw daemon in the foreground.
REM On exit, background processes are terminated.

setlocal

set "INSTALL_DIR=%~dp0"

echo Starting LocalAgent...
echo.

REM Start config-server in background
echo  [1/3] config-server (port 3100)
start /B "" "%INSTALL_DIR%config-server.exe" --port 3100 > nul 2>&1
set CONFIG_PID=%ERRORLEVEL%

REM Start browser-server in background
echo  [2/3] browser-server (port 3200)
start /B "" "%INSTALL_DIR%browser-server.exe" --port 3200 > nul 2>&1
set BROWSER_PID=%ERRORLEVEL%

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
