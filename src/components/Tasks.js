// Tasks.js
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';

const tasksData = [
  {
    status: 'In process',
    tasks: [
      {
        name: 'Integrating mapping services',
        policy: 'Domain and DNS',
        assignedTo: 'Hammad',
        dueDate: 'Today',
      },
      {
        name: 'Policy review',
        policy: 'Business Continuity',
        assignedTo: 'Alyaan Javed',
        dueDate: '3/12/2023',
      },
      {
        name: 'Checking services',
        policy: 'Access',
        assignedTo: 'Raza Abubakar',
        dueDate: '3/11/2023',
      },
      {
        name: 'Encryption of sensitive data',
        policy: 'Domain and DNS',
        assignedTo: 'Salee Shankar',
        dueDate: '3/10/2023',
      },
    ],
  },
  {
    status: 'Completed',
    tasks: [
      {
        name: 'Annual Compliance',
        policy: 'Business Continuity',
        assignedTo: 'Hammad',
        completionDate: '3/12/2023',
      },
      {
        name: 'Annual archiving of tasks',
        policy: 'Email',
        assignedTo: 'Alyaan Javed',
        completionDate: '3/10/2023',
      },
      {
        name: 'Saving passwords',
        policy: 'Data protection',
        assignedTo: 'Raza Abubakar',
        completionDate: '3/9/2023',
      },
    ],
  },
  {
    status: 'Not started',
    tasks: [
      {
        name: 'Mapping processes',
        policy: 'Domain and DNS',
        assignedTo: 'Not assigned',
        dueDate: '3/13/2023',
      },
      {
        name: 'Enforcing passwords',
        policy: 'Business Continuity',
        assignedTo: 'Not assigned',
        dueDate: '3/12/2023',
      },
    ],
  },
];

const TaskCard = ({ task }) => (
  <div className="task-card">
    <div>{task.name}</div>
    <div>{task.policy}</div>
    <div>{task.assignedTo}</div>
    <div>{task.dueDate || task.completionDate}</div>
  </div>
);

const TaskSection = ({ status, tasks }) => (
  <div className="task-section">
    <div className={`status-header ${status.replace(' ', '-').toLowerCase()}`}>
      {status}
    </div>
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  </div>
);

const Tasks = () => (
  <div className="tasks-page">
    <main className="main-content">

<div class="top1">

<div style={{ display: 'flex' , textAlign:'center', alignItems:'center'}}>
      <h3 style={{textAlign:'center' , height: '1.3rem'}}>Tasks</h3>
    </div>


    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: 0 }}>
      <AccountCircleIcon />
        <span>user@domain.in</span>
      </h3>
    </div>

</div>

      {tasksData.map((section, index) => (
        <TaskSection key={index} status={section.status} tasks={section.tasks} />
      ))}
    </main>
  </div>
);

export default Tasks;
