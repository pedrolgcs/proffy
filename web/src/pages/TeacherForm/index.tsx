import React from 'react';

// components
import PageHeader from '../../components/PageHeader';

// styles
import './styles.css';

const TeacherForm: React.FC = () => {
  return (
    <>
      <div id="page-teacher-form" className="container">
        <PageHeader title="Que incrível que você quer dar aulas"></PageHeader>
      </div>
    </>
  );
};

export default TeacherForm;
