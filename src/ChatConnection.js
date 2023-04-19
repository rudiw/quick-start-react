export function createConnection({ serverUrl, roomId }) {
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 2000);

      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...'
      );
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event != 'connected') {
        throw Error('Only "connected" event is supported.');
      }

      connectedCallback = callback;
    },
    disconnect() {
      // console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      clearTimeout(timeout);
    },
  };
}
