import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Head from "../head.js";
import Table from "react-bootstrap/Table";
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBTableFooter,
} from "cdbreact";
import { Autorenew } from "@material-ui/icons";

const Landing = () => {
  return (
    <div className="landing_page">
      <Head />
      <div className="main-body">
        <div className="dash-head">
          <div className="overview">
            <p>Overview</p>
          </div>
          <div className="overview-body">
            <div className="overview-left">
              <p className="overview-mark">456</p>
              <p className="overview-description">Takedowns Sent</p>
            </div>
            <div className="overview-right">
              <p className="overview-mark">18,245</p>
              <p className="overview-description">Downloads Intercepted</p>
            </div>
          </div>
        </div>

        <div className="dash-body">
          <div className="dash-table">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Status</th>
                </tr>
              </thead>
            </Table>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <Table className="table table-bordered table-striped mb-0 mt-0">
                <tbody>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                  <tr>
                    <td>Asset</td>
                    <td>Status</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Table>
              <tfoot>
                <tr>
                  <th colSpan="2">Add New Asset</th>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
