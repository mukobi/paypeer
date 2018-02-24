import React from 'react'

const Send = () => (
    <div>
        <div>
            <h1>Send</h1>
            <p>This is your Send page.</p>
        </div>
        <div>
            <h2>Find users</h2>
            <input type="text" name="nick" class="form-control" placeholder="Search by nickname..." />
            <input type="submit" class="btn send_button btn-default" name="search" value="Search" />
        </div>
    </div>
);

export default Send
