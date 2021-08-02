import './TagButton.css';

const TagButton = (props) => {
    return (
        <button type="button" className="tag_style">{props.tagName}</button>
    )
}
export default TagButton;