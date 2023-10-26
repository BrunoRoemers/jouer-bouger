import { forwardRef, type ChangeEvent, useImperativeHandle } from "react";
import type WidgetProps from "./widget-props.interface";

// adapted from: https://github.com/decaporg/decap-cms/issues/445#issuecomment-824499171
const SlugControl = forwardRef<any, WidgetProps>(
  ({ forID, classNameWrapper, onChange, value, entry }, ref) => {
    useImperativeHandle(ref, () => ({
      isValid: () => {
        // TODO slug not valid if file with this name already exists
        // TODO detect slugs cf. https://github.com/decaporg/decap-cms/blob/d564aa6f64d6047b67e1d5440b0d31c9f101182b/packages/decap-cms-widget-relation/src/RelationControl.js#L242
        return true;
      },
    }));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    const slug = entry.get("slug");

    return (
      <input
        type="text"
        id={forID}
        className={
          !!slug
            ? "!bg-gray-100 cursor-not-allowed " + classNameWrapper
            : classNameWrapper
        }
        onChange={handleChange}
        value={slug || value}
        disabled={!!slug}
      />
    );
  },
);

export default SlugControl;
