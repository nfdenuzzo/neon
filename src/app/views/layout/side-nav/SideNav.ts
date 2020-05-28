import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonGrid, NeonGridArea } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
  },
})
export default class SideNav extends Vue {
  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['side-nav-content']],
      },
    ];
  }
}