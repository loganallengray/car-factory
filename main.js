/*
    Function that creates chassis object
    Functions that add keys with values, object as parameters
*/

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever";

	// Return the chassis that now has a body property on it
	return chassisObject;
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4;

    return chassisObject;
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L";

    return chassisObject;
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting";

    return chassisObject;
}

const addDriveChain = (chassisObject) => {
    chassisObject.driveChain = "Two wheel drive";

    return chassisObject;
}

const chassis = createChassis();
const chassisWithBody = addBody(chassis);
const chassisWithWheels = addWheels(chassisWithBody);
const chassisWithEngine = addEngine(chassisWithWheels);
const chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine);
const chassisWithDriveChain = addDriveChain(chassisWithSteeringWheel);

console.log(chassisWithDriveChain);