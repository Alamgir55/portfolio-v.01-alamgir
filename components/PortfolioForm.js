import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

const PortfolioForm = ({onSubmit, initialData = {}}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm({defaultValues: initialData});

  useEffect(() => {
    register({name: 'startDate'});
    register({name: 'endDate'});
  }, [register])

  const handleDateChange = (dateType, setDate) => date => {
    //console.log(date);
    setValue(dateType, date);
    setDate(date);
  }

    return (
      <form onSubmit={handleSubmit(onSubmit)} >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              //ref={register}
              {...register("title")}
              name="title"
              type="text"
              className="form-control"
              id="title"/>
          </div>

          <div className="form-group">
            <label htmlFor="city">Company</label>
            <input
              //ref={register}
              {...register("company")}
              name="company"
              type="text"
              className="form-control"
              id="company"/>
          </div>

          <div className="form-group">
            <label htmlFor="city">Company Website</label>
            <input
              //ref={register}
              {...register("companyWebsite")}
              name="companyWebsite"
              type="text"
              className="form-control"
              id="companyWebsite"/>
          </div>

          <div className="form-group">
            <label htmlFor="street">Location</label>
            <input
              //ref={register}
              {...register("location")}
              name="location"
              type="text"
              className="form-control"
              id="location"/>
          </div>

          <div className="form-group">
            <label htmlFor="street">Job Title</label>
            <input
              //ref={register}
              {...register("jobTitle")}
              name="jobTitle"
              type="text"
              className="form-control"
              id="jobTitle"/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              //ref={register}
              {...register("description")}
              name="description"
              rows="5"
              type="text"
              className="form-control"
              id="description">
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <div>
              <DatePicker
                showYearDropdown
                selected={startDate}
                onChange={handleDateChange('startDate', setStartDate)}
              />
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <div>
            <DatePicker
                disabled={!endDate}
                showYearDropdown
                selected={endDate}
                onChange={handleDateChange('endDate', setEndDate)}
              />
            </div>
          </div>

          <div className="form-group">
            { endDate &&
            <button
              type="button" 
              className="btn btn-danger"
              onClick={() => handleDateChange('endDate', setEndDate)(null)}>
              No End Date
            </button>
            }
            { !endDate &&
            <button
              type="button" 
              className="btn btn-success"
              onClick={() => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0,0,0,0)))}>
              Set End Date
            </button>
            }
          </div>
          <button
            type="submit"
            className="btn btn-primary">Create
          </button>
        </form>
    )
}

export default PortfolioForm;
