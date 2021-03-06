Driver {
  name: 'mip',
  robot:
   Robot {
     toJSON: [Function: bound ],
     connection: [Function: bound ],
     initRobot: [Function: bound ],
     device: [Function: bound ],
     start: [Function: bound ],
     startWork: [Function: bound ],
     startConnections: [Function: bound ],
     startConnection: [Function: bound ],
     startDevices: [Function: bound ],
     startDevice: [Function: bound ],
     halt: [Function: bound ],
     toString: [Function: bound ],
     log: [Function: bound ],
     setMaxListeners: [Function: bound setMaxListeners],
     getMaxListeners: [Function: bound getMaxListeners],
     emit: [Function: bound emit],
     addListener: [Function: bound addListener],
     on: [Function: bound addListener],
     once: [Function: bound once],
     removeListener: [Function: bound removeListener],
     removeAllListeners: [Function: bound removeAllListeners],
     listeners: [Function: bound listeners],
     listenerCount: [Function: bound listenerCount],
     name: 'mip',
     running: true,
     connections: { bluetooth: [Object], keyboard: [Object] },
     devices: { mip: [Circular], keyboard: [Object] },
     work: [Function],
     commands: { move: [Function: bound ] },
     move: [Function: bound ],
     mip: [Circular],
     keyboard:
      Driver {
        name: 'keyboard',
        robot: [Circular],
        connection: [Object],
        commands: {},
        events: [],
        pin: undefined,
        interval: 10,
        details: {},
        start: [Function: bound ],
        halt: [Function: bound ],
        setupCommands: [Function: bound ],
        toJSON: [Function: bound ],
        proxyMethods: [Function: bound ],
        respond: [Function: bound ],
        defineEvent: [Function: bound ],
        defineAdaptorEvent: [Function: bound ],
        defineDriverEvent: [Function: bound ],
        _proxyEvents: [Function: bound ],
        setMaxListeners: [Function: bound setMaxListeners],
        getMaxListeners: [Function: bound getMaxListeners],
        emit: [Function: bound emit],
        addListener: [Function: bound addListener],
        on: [Function: bound addListener],
        once: [Function: bound once],
        removeListener: [Function: bound removeListener],
        removeAllListeners: [Function: bound removeAllListeners],
        listeners: [Function: bound listeners],
        listenerCount: [Function: bound listenerCount],
        _events: [Object],
        _eventsCount: 7,
        started: true } },
  connection:
   Central {
     name: 'bluetooth',
     robot:
      Robot {
        toJSON: [Function: bound ],
        connection: [Function: bound ],
        initRobot: [Function: bound ],
        device: [Function: bound ],
        start: [Function: bound ],
        startWork: [Function: bound ],
        startConnections: [Function: bound ],
        startConnection: [Function: bound ],
        startDevices: [Function: bound ],
        startDevice: [Function: bound ],
        halt: [Function: bound ],
        toString: [Function: bound ],
        log: [Function: bound ],
        setMaxListeners: [Function: bound setMaxListeners],
        getMaxListeners: [Function: bound getMaxListeners],
        emit: [Function: bound emit],
        addListener: [Function: bound addListener],
        on: [Function: bound addListener],
        once: [Function: bound once],
        removeListener: [Function: bound removeListener],
        removeAllListeners: [Function: bound removeAllListeners],
        listeners: [Function: bound listeners],
        listenerCount: [Function: bound listenerCount],
        name: 'mip',
        running: true,
        connections: [Object],
        devices: [Object],
        work: [Function],
        commands: [Object],
        move: [Function: bound ],
        mip: [Circular],
        keyboard: [Object] },
     host: undefined,
     port: undefined,
     details:
      { uuid: '9f5c5021fab34f1c9c977379573ea116',
        module: 'cylon-ble' },
     bleConnect:
      Noble {
        state: 'poweredOn',
        address: 'ac:bc:32:c2:bb:28',
        _bindings: [Object],
        _peripherals: [Object],
        _services: [Object],
        _characteristics: [Object],
        _descriptors: [Object],
        _discoveredPeripheralUUids: [Object],
        _events: [Object],
        _eventsCount: 3,
        _allowDuplicates: false },
     isConnected: true,
     uuid: '9f5c5021fab34f1c9c977379573ea116',
     scanMode: false,
     writeNotify: true,
     connectedPeripherals: { '9f5c5021fab34f1c9c977379573ea116': [Object] },
     connect: [Function: bound ],
     disconnect: [Function: bound ],
     startScanning: [Function: bound ],
     stopScanning: [Function: bound ],
     peripherals: [Function: bound ],
     connectPeripheral: [Function: bound ],
     readServiceCharacteristic: [Function: bound ],
     writeServiceCharacteristic: [Function: bound ],
     notifyServiceCharacteristic: [Function: bound ],
     getCharacteristic: [Function: bound ],
     _connectBLE: [Function: bound ],
     _connectService: [Function: bound ],
     _connectCharacteristic: [Function: bound ],
     connectedPeripheral: [Function: bound ],
     _connectedServices: [Function: bound ],
     _connectedService: [Function: bound ],
     _connectedCharacteristics: [Function: bound ],
     _connectedCharacteristic: [Function: bound ],
     toJSON: [Function: bound ],
     proxyMethods: [Function: bound ],
     respond: [Function: bound ],
     defineEvent: [Function: bound ],
     defineAdaptorEvent: [Function: bound ],
     defineDriverEvent: [Function: bound ],
     _proxyEvents: [Function: bound ],
     setMaxListeners: [Function: bound setMaxListeners],
     getMaxListeners: [Function: bound getMaxListeners],
     emit: [Function: bound emit],
     addListener: [Function: bound addListener],
     on: [Function: bound addListener],
     once: [Function: bound once],
     removeListener: [Function: bound removeListener],
     removeAllListeners: [Function: bound removeAllListeners],
     listeners: [Function: bound listeners],
     listenerCount: [Function: bound listenerCount],
     connected: true },
  commands:
   { set_head_led: [Function],
     set_chest_led: [Function],
     flash_chest_led: [Function],
     get_up: [Function],
     drive_distance: [Function],
     drive_forward: [Function],
     drive_backward: [Function],
     turn_left: [Function],
     turn_right: [Function],
     set_game_mode: [Function],
     stop: [Function] },
  events: [],
  pin: undefined,
  interval: 10,
  details: {},
  Codes:
   { PlaySound: 6,
     SetPosition: 8,
     DistanceDrive: 112,
     DriveForwardTime: 113,
     DriveBackwardTime: 114,
     TurnLeftAngle: 115,
     TurnRightAngle: 116,
     ContinousDrive: 120,
     SetGameMode: 118,
     GetGameMode: 130,
     Stop: 119,
     RequestStatus: 121,
     GetUp: 35,
     RequestWeightUpdate: 129,
     RequestChestLED: 131,
     SetChestLED: 132,
     FlashChestLED: 137,
     SetHeadLED: 138,
     RequestHeadLED: 139,
     ReadOdometer: 133,
     ResetOdometer: 134,
     GestureDetect: 10,
     SetGestureRadarMode: 12,
     GetRadarMode: 13,
     RadarResponse: 12,
     DetectionMode: 14,
     RequestDetectionMode: 15,
     Detected: 4,
     ShakeDetected: 26,
     IRRemoteEnabled: 16,
     RequestIRRemoteEnabled: 17,
     Sleep: 250,
     DisconnectApp: 254,
     ForceBLEDisconnect: 252,
     SetUserData: 18,
     GetUserData: 19,
     GetSoftwareVersion: 20,
     GetHardwareInfo: 25,
     SetVolume: 21,
     GetVolume: 22,
     SendIRDongleCode: 140,
     ReceiveIRDongleCode: 3,
     ClapTimes: 29,
     ClapEnabled: 30,
     RequestClapEnabled: 31,
     ClapDelayTime: 32 },
  Games:
   { App: 1,
     Cage: 2,
     Tracking: 3,
     Dance: 4,
     Default: 5,
     Stack: 6,
     Trick: 7,
     Roam: 8 },
  start: [Function: bound ],
  halt: [Function: bound ],
  setHeadLED: [Function: bound ],
  setChestLED: [Function: bound ],
  flashChestLED: [Function: bound ],
  getUp: [Function: bound ],
  driveDistance: [Function: bound ],
  driveForward: [Function: bound ],
  driveBackward: [Function: bound ],
  turnLeft: [Function: bound ],
  turnRight: [Function: bound ],
  setGameMode: [Function: bound ],
  stop: [Function: bound ],
  _writeServiceCharacteristic: [Function: bound ],
  setupCommands: [Function: bound ],
  toJSON: [Function: bound ],
  proxyMethods: [Function: bound ],
  respond: [Function: bound ],
  defineEvent: [Function: bound ],
  defineAdaptorEvent: [Function: bound ],
  defineDriverEvent: [Function: bound ],
  _proxyEvents: [Function: bound ],
  setMaxListeners: [Function: bound setMaxListeners],
  getMaxListeners: [Function: bound getMaxListeners],
  emit: [Function: bound emit],
  addListener: [Function: bound addListener],
  on: [Function: bound addListener],
  once: [Function: bound once],
  removeListener: [Function: bound removeListener],
  removeAllListeners: [Function: bound removeAllListeners],
  listeners: [Function: bound listeners],
  listenerCount: [Function: bound listenerCount],
  started: true }