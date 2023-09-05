const [activities, setActivities] = React.useState([]);

const fetchActivities = async () => {
  try {
    const response = await fetch("http://localhost:5000/activities");
    const data = await response.json();
    setActivities(data);
  } catch (error) {
    console.error(error);
  }
};

React.useEffect(() => {
  fetchActivities();
}, []);

const createActivity = async (newActivity) => {
  try {
    const response = await fetch("http://localhost:5000/activities/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    });
    const data = await response.json();
    setActivities((prevActivities) => [...prevActivities, data]);
  } catch (error) {
    console.error(error);
  }
};

const updateActivity = async (id, updatedActivity) => {
  try {
    const response = await fetch(`http://localhost:5000/activities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    });
    const data = await response.json();
    setActivities((prevActivities) =>
      prevActivities.map((activity) => (activity._id === id ? data : activity))
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteActivity = async (id) => {
  try {
    await fetch(`http://localhost:5000/activities/${id}`, {
      method: "DELETE",
    });
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity._id !== id)
    );
  } catch (error) {
    console.error(error);
  }
};
