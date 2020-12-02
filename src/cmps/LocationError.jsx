import { Button } from '@material-ui/core'
import React from 'react'

export function LocationError({onClose}) {
    return (
        <div className="location-error-container">
            <h3>No location found</h3>
            <p>This app requires access to your location in order to work.</p>
            <p>Please enable your location to be found via the browser and click OK once you've done so</p>
            <Button onClick={onClose} color="secondary">
                OK
            </Button>
        </div>
    )
}
