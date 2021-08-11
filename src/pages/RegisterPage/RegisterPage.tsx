import React from 'react'
import "./RegisterPage.style.css"
import { Col ,Container,Row,Form } from 'react-bootstrap'
import { DatePicker } from "jalali-react-datepicker";
const RegisterPage = () => {
    return (
        
        <div>
           <section className="" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img3.jpg" className="w-100" style={{borderTopLeftRadius:" .3rem", borderTopRightRadius:" .3rem"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">{"ثبت اطلاعات"}</h3>

            <form className="px-md-2">

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">{"نام"}</label>
                <input type="text" id="form3Example1q" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">{" نام خانوادگی"}</label>
                <input type="text" id="form3Example1q" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">{" شماره موبایل"}</label>
                <input type="text" id="form3Example1q" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">{" ایمیل"}</label>
                <input type="email" id="form3Example1q" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">{" رمز عبور"}</label>
                <input type="password" id="form3Example1q" className="form-control" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline datepicker">
                      <label htmlFor="exampleDatepicker1" className="form-label">{"تاریخ تولد"}</label>
                    <  DatePicker className=' datapicker form-control'/>
                  </div>

                </div>
                <div className="col-md-6 mt-2">

                <Form.Select aria-label="Default select example" className='mt-4'>
  <option selected disabled>{"جنسیت"}</option>
  <option  value="1">{"مرد"}</option>
  <option value="2">{"زن"}</option>
  <option value="3">{"متفرقه"}</option>
</Form.Select>

                </div>
              </div>

       

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

               
                </div>
              </div>

              <button type="submit" className="btn btn-success w-100 btn-lg mb-1">{"تایید"}</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
       
    )
}

export default RegisterPage
