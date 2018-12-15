./cronosd -daemon
#primitive keep-alive 
while sleep 30; do
  ps aux |grep /cronosd |grep -q -v grep
  DAEMON_STATUS=$? 
  if [ $DAEMON_STATUS -ne 0 ]; then
    echo "daemon exited with status $DAEMON_STATUS - restarting"
    ./cronosd -daemon
  fi
done
