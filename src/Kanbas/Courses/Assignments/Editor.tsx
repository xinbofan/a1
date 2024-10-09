import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import "../../styles.css";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control mb-2"
      />
      <br />
      <br />

      {/* Description Section */}
      <div id="wd-description" className="form-control mb-2 p-3">
        <p>
          The assignment is{" "}
          <strong className="text-danger">available online</strong>
        </p>
        <p>
          Submit a link to the landing page of your Web application running on
          Netlify.
        </p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p>
      </div>

      <br />
      <br />

      {/* Form Section */}
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="wd-points">Points</label>
          <input
            id="wd-points"
            type="number"
            value={100}
            className="form-control mb-2"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-group">Assignment Group</label>
          <div className="dropdown-container">
            <select id="wd-group" className="form-control mb-2">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
            <FaAngleDown className="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
          <div className="dropdown-container">
            <select id="wd-display-grade-as" className="form-control mb-2">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </select>
            <FaAngleDown className="dropdown-icon" />
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-submission-type">Submission Type</label>
          <div className="submission-type-container border p-3 rounded">
            <div className="mb-3">
              <div className="dropdown-container">
                <select id="wd-submission-type" className="form-select">
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <strong>Online Entry Options</strong>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign To Section */}
      <div className="assign-container border p-3 rounded mt-3">
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign To
          </label>
          <input
            id="wd-assign-to"
            value="Everyone"
            className="form-control mb-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <div className="input-group mb-2">
            <input
              id="wd-due-date"
              type="text"
              value="May 13, 2024, 11:59 PM"
              className="form-control"
            />
            <span className="input-group-text">
              <FaCalendarDays />
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-available-from" className="form-label">
              Available from
            </label>
            <div className="input-group">
              <input
                id="wd-available-from"
                type="text"
                value="May 6, 2024, 12:00 AM"
                className="form-control"
              />
              <span className="input-group-text">
                <FaCalendarDays />
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="wd-available-until" className="form-label">
              Until
            </label>
            <div className="input-group">
              <input
                id="wd-available-until"
                type="text"
                value="May 20, 2024, 12:00 AM"
                className="form-control"
              />
              <span className="input-group-text">
                <FaCalendarDays />
              </span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
