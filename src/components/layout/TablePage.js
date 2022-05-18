import React from "react";
import "./main.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Head from "../head.js";
import { Table, Button } from "react-bootstrap";

import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBBtn,
} from "cdbreact";

const TablePage = () => {
  return (
    <div className="landing_page">
      <Head />
      <div className="main-body">
        <div>
          <p>Asset Manager</p>
        </div>
        <div>
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Original Link</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asset</td>
                  <td>Active</td>
                  <td>
                    <button>Intercept</button>
                    <button>Remove</button>
                  </td>
                  <td>Original Link</td>
                  <td>
                    <Button variant="primary">
                      Options <span class="bi bi-box-arrow-up-right"></span>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
