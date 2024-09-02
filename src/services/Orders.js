export async function askGoals() {
  const response = await fetch("/goals.json");
  const goals = await response.json();
  return goals;
}

export async function askGoal() {
  const response = await fetch("/goal.json");
  const goal = await response.json();
  return goal;
}

export async function createGoal() {
  const response = await fetch("/goal.json");
  const goalCreated = await response.json();
  console.log("Meta creada!", goalCreated);
  return goalCreated;
}

export async function updateGoal() {
  const response = await fetch("/goal.json");
  const goalUpdate = await response.json();
  console.log("Meta actualizada!", goalUpdate);
  return goalUpdate;
}

export async function deleteGoal() {
  const response = await fetch("/goal.json");
  const goalDelete = await response.json();
  console.log("Meta borrada!", goalDelete.id);
  return goalDelete.id;
}
