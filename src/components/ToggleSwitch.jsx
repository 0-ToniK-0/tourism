import { Form } from "react-bootstrap"; // Import Form from react-bootstrap


const ToggleSwitch = ({ handleToggle, filterDistrict }) => {
    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label={filterDistrict ? "Group by District" : "Show All Locations"}
                checked={filterDistrict}
                onChange={handleToggle}
                className="text-black"
            />
        </Form>
    )
}
export default ToggleSwitch