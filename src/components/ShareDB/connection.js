import ShareDB from '@teamwork/sharedb/lib/client';
import ReconnectingWebSocket from 'reconnecting-websocket';
import otText from 'ot-text';

const server = {
  host: 'upword.ly/ws',
  protocol: 'wss://',

  getAddress: function() {
    return this.protocol + this.host;
  },
};

const socket = new ReconnectingWebSocket(server.getAddress(), [], {
  automaticOpen: true,
  maxReconnectionDelay: 2000,
  reconnectInterval: 2000,
  maxReconnectInterval: 3000,
  timeoutInterval: 2000,
  maxRetries: Infinity,
});

const connection = new ShareDB.Connection(socket);
ShareDB.types.register(otText.type);

export {
  connection,
  socket,
};
