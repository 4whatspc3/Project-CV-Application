import { useState } from "react";
import { Fragment } from "react";

function Personal () {
    const [value, setValue] = useState("");

    return (
        <Fragment>
            <h2>Personal Details</h2>

            <div>
                <label htmlFor="fullName">Full name: </label>
                <input id="fullName" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
        </Fragment>
    )
}

export default Personal;