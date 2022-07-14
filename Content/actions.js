window.Actions = {
  damage1: {
    name: 'Whomp!',
    success: [
      { type: 'textMessage', text: '{CASTER} uses Whomp!' },
      { type: 'animation', animation: 'spin' },
      { type: 'stateChange', damage: 10 },
    ],
  },
};
