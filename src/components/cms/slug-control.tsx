import { forwardRef, type ChangeEvent, useImperativeHandle } from "react";
import type WidgetProps from "./widget-props.interface";

// adapted from: https://github.com/decaporg/decap-cms/issues/445#issuecomment-824499171
const SlugControl = forwardRef<any, WidgetProps>(
  ({ forID, classNameWrapper, onChange, value, entry }, ref) => {
    useImperativeHandle(ref, () => ({
      isValid: () => {
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
            ? classNameWrapper + " bg-gray-100 cursor-not-allowed"
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
