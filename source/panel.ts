export const panel = {
  type: 'dockable',
  title: 'Localization Checker',
  width: 400,
  height: 300,
  style: 'padding: 10px;',
  template: `
    <ui-button id="loadJson">Load Localization JSON</ui-button>
    <ui-label id="status" value="No file loaded yet."></ui-label>
  `,
  $: {
    loadJson: '#loadJson',
    status: '#status'
  },
  methods: {
    loadLocalization() {
      Editor.Dialog.openFile({
        title: 'Select Localization JSON',
        filters: [{ name: 'JSON', extensions: ['json'] }],
        multi: false
      }).then((files: string[]) => {
        if (files && files.length > 0) {
          const fs = require('fs');
          const content = fs.readFileSync(files[0], 'utf-8');
          try {
            const data = JSON.parse(content);
            this.$.status.value = `Loaded: ${files[0]}`;
            console.log('Localization Data:', data);
          } catch (e) {
            this.$.status.value = `Invalid JSON`;
          }
        }
      });
    }
  },
  ready() {
    this.$.loadJson.addEventListener('confirm', this.loadLocalization.bind(this));
  }
};
