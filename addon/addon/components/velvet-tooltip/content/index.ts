import templateOnlyComponent from "@ember/component/template-only";
import type { ModifierLike } from "@glint/template";
import type { ContentSignature } from "velvet-thunder/components/velvet-dropdown";

interface VelvetTooltipContentSignature {
  Args: {
    isShown: boolean;
    modifier: ModifierLike<ContentSignature>;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default templateOnlyComponent<VelvetTooltipContentSignature>();
