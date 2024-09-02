import { GoalType } from "../types/goalType";

export async function askGoals() : Promise<GoalType[]> {
  const response = await fetch("/goals.json");
  const goals: GoalType[] = await response.json();
  return goals;
}

export async function askGoal(id: number) : Promise<GoalType> {
  const response = await fetch(`/goal.json${id}`);
  const goal: GoalType = await response.json();
  return goal;
}

export async function createGoal(goal: GoalType) : Promise<GoalType> {
  const response = await fetch("/goal.json", {
    method: "POST",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UFT-8",
    },
  });
  const goalCreated: GoalType = await response.json();
  console.log("Meta creada!", goalCreated);
  return goalCreated;
}

export async function updateGoal(goal: GoalType) : Promise<GoalType> {
  const response = await fetch("/goal.json");
  const goalUpdate: GoalType = await response.json();
  console.log("Meta actualizada!", goalUpdate);
  return goalUpdate;
}

export async function deleteGoal(id: number) : Promise<void> {
  await fetch(`/goal.json${id}`, {
    method: 'DELETE'
  });
  console.log("Meta borrada!", id);
}
