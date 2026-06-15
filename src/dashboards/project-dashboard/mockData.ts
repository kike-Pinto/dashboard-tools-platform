import { ProjectRow } from './types'

export const projectMockData: ProjectRow[] = [
  {
    project: 'Plant Expansion',
    task: 'Foundation',
    planned_progress: 100,
    actual_progress: 100,
    budget: 5000,
    cost: 4800,
    status: 'Completed',
  },
  {
    project: 'Plant Expansion',
    task: 'Steel Structure',
    planned_progress: 75,
    actual_progress: 60,
    budget: 8000,
    cost: 6200,
    status: 'In Progress',
  },
  {
    project: 'Plant Expansion',
    task: 'Piping',
    planned_progress: 40,
    actual_progress: 35,
    budget: 6000,
    cost: 4100,
    status: 'In Progress',
  },
  {
    project: 'Plant Expansion',
    task: 'Electrical',
    planned_progress: 30,
    actual_progress: 20,
    budget: 7000,
    cost: 3300,
    status: 'Delayed',
  },
  {
    project: 'Plant Expansion',
    task: 'Testing',
    planned_progress: 10,
    actual_progress: 0,
    budget: 3000,
    cost: 500,
    status: 'Not Started',
  },
]
