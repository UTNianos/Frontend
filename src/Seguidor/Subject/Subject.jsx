import React from 'react';
import Styles from './Subject.scss';
import cssModules from 'react-css-modules';
import { Popover, Card, Menu, Dropdown } from 'antd';
import SubjectBadge from './SubjectBadge';

const subjectValues = [
	{"number": 1, "name": "Pendiente"},
	{"number": 2, "name": "Cursando"},
	{"number": 3, "name": "Firmada"},
	{"number": 4, "name": "Aprobada"}
];

function getValueStatus(value) {
   let status = "";

   switch (value)
   {
      case 1:
        status = "default";
        break;
      case 2:
        status = "warning";
        break;
      case 3:
        status = "processing";
        break;
      case 4:
        status = "success";
        break;
      default:
        status = "";
   }

   return status;
}

function updateMateria(e, id, updateFn){

   const actualKey = parseInt(e.key)+1;
   const currentStatus = subjectValues.filter(s => s.number == actualKey)[0];
   const value = currentStatus.number;

   const materiaStatus = {"id": id, "status": value};
   updateFn(materiaStatus);
}


const PopoverContent = (
  <div>
    <p>No se cumplen las coorrelativas para que curses esta materia.</p>    
  </div>
);

const Subject = ({id, name, status, cursada, final, updateEstado}) => {

  const badgeStatus = getValueStatus(status);
  const currentStatus = subjectValues.filter(s => s.number == status);
  const statusName = currentStatus[0].name;

  const menu = (
	<Menu onClick={(e) => updateMateria(e, id, updateEstado)}>
	  {subjectValues.map((sValue, i) =>
	   <Menu.Item key={i} >
          {sValue.name}
	   </Menu.Item>
	   )}
	</Menu>
  );

  if(cursada) {
	  return (
	  <div styleName="Subject">
		<Card styleName="SubjectCard">
		  <strong styleName="SubjectName">{name}</strong>
		  <Dropdown.Button overlay={menu} style={{'display': 'inline', 'marginLeft': '4px'}}>
		   {statusName}
		  </Dropdown.Button>
		</ Card>
	  </div>
    );
  }

  if(!cursada) {
	 return (
	 <div styleName="Subject">
	    <Popover content={PopoverContent} title={name} trigger="hover">
		  <Card styleName="SubjectCard">
		    <strong styleName="SubjectName">{name}</strong>
		    <Dropdown.Button  
			       disabled 
				   style={{'display': 'inline', 'marginLeft': '4px'}} 
				   overlay={menu}
			>
 			Pendiente
		    </Dropdown.Button>
		  </Card>
		</ Popover>
	 </div>
	 );
  }

}

export default cssModules(Subject, Styles, { allowMultiple: true });
