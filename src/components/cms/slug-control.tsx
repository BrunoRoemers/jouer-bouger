import {
  forwardRef,
  useState,
  type ChangeEvent,
  useImperativeHandle,
} from "react";
import type WidgetProps from "./widget-props.interface";

// adapted from: https://github.com/decaporg/decap-cms/issues/445#issuecomment-824499171
const SlugControl = forwardRef<any, WidgetProps>(
  ({ forID, classNameWrapper, onChange, value, entry, ...otherProps }, ref) => {
    const [touched, setTouched] = useState(false);

    useImperativeHandle(ref, () => ({
      isValid: () => {
        // TODO
        return true;
      },
    }));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
      setTouched(true);
    };

    // TODO
    console.log(otherProps);

    // TODO disable input when item published
    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        onChange={handleChange}
        value={touched ? value : entry.get("slug")}
      />
    );
  },
);

export default SlugControl;
