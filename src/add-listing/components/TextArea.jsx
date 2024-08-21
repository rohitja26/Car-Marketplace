import { Textarea } from "@/components/ui/textarea";

function TextArea({ item, handleInputChange }) {
  return (
    <div>
      <Textarea
        required={item.required}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  );
}

export default TextArea;
