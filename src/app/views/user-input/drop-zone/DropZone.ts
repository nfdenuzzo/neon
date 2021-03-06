import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropZone, NeonInput } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonDropZone,
    ComponentDocumentation,
  },
})
export default class DropZone extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A target for uploading files';

  private dropZoneExamples = `<div class="neon-horizontal drop-zone-examples">
  <neon-drop-zone>
    <span>Drop files here to upload</span>
  </neon-drop-zone>
  <neon-drop-zone :circular="true" :disabled="false">
    <span>Circular drop zone</span>
  </neon-drop-zone>
</div>`;

  private examples = [
    {
      title: 'Drop zone example',
      template: this.dropZoneExamples,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonDropZone');
  }
}
