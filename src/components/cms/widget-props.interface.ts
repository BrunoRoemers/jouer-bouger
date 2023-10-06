import type { CmsWidgetControlProps } from "decap-cms-core";

export default interface WidgetProps extends CmsWidgetControlProps {
  entry: Map<any, any>;
}
