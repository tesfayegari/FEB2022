import * as React from 'react';
import styles from './EmployeeBirthdays.module.scss';
import { IEmployeeBirthdaysProps } from './IEmployeeBirthdaysProps';

import { Service } from '../Service';

interface IEmployee {
  fullName: string;
  email: string;
  dob: string;
  picture: string;
}

export interface IEmployeeBirthdaysState {
  employees: IEmployee[];
  status: string;
}

export default class EmployeeBirthdays extends React.Component<IEmployeeBirthdaysProps, IEmployeeBirthdaysState> {
  service: Service;

  constructor(props: IEmployeeBirthdaysProps) {
    super(props);
    this.state = { employees: [], status: '' }
    this.service = new Service(this.props._context);
  }

  componentWillReceiveProps(nextProps: Readonly<IEmployeeBirthdaysProps>, nextContext: any): void {
    if (nextProps.count != this.props.count) {
      console.log('Count Property Chagned');
      this.readBirthdays(nextProps.count);
    }
  }

  private readBirthdays(count: number) {
    //Reading SP data start 
    let emps: IEmployee[] = [];
    this.service.getUpComingBirthdays('Birthdays', count)
      .then(response => {
        console.log('Data is ', response);
        let items = response.value;
        for (let item of items) {
          emps.push(
            {
              fullName: item.Employee.Title,
              email: item.Employee.EMail,
              dob: (new Date(item.Month_x002d_Date)).toString().substring(4, 10).toLocaleUpperCase(),
              picture: '/_layouts/15/userphoto.aspx?size=L&username=' + item.Employee.EMail
            })
        }
        console.log('Employees are ', emps);
        this.setState({ employees: emps })
      },
        error => {
          console.error('Oops error ', error);
        });
    //Reading SP data end
  }

  componentDidMount(): void {
    //Reading SP data start 
    this.readBirthdays(this.props.count);
  }


  public render(): React.ReactElement<IEmployeeBirthdaysProps> {

    const {
      description,
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.employeeBirthdays} ${hasTeamsContext ? styles.teams : ''}`} style={{ maxWidth: '18rem' }}>
        <h3>{description}</h3>
        <hr />

        {this.state.employees.map(employee => <Employee Title={employee.fullName} date={employee.dob} picture={employee.picture}></Employee>)}



      </section>
    );
  }
}




const Employee = (props) => {
  return (
    <div>
      <div className="card m-2" style={{ width: '100%' }}>
        <img className="card-img-top" src={props.picture} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">{props.date}</p>
        </div>
      </div>
      <hr />
    </div>

  )
}




