import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Index({
  auth,
  billing,
  mastersetting,
  organization,
  entity,
  packagedata,
  offers,
  framwork,
  bank,
  success,
}: any) {
  return (
    <React.Fragment>
      <Head title="Proforma Invoice" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}
          <Row>
            <Col>
              <div className="h-100">
                <Section
                  mastersetting={mastersetting}
                  organization={organization}
                  bank={bank}
                  entity={entity}
                  packageshow={packagedata}
                  offers={offers}
                  framwork={framwork}
                />
              </div>
            </Col>
          </Row>
          {success && (
            <Row>
              <Col>
                <Alert
                  variant="secondary"
                  className="text-white bg-secondary alert-label-icon"
                  role="alert"
                  closeVariant="white"
                  dismissible
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <SearchTable
                    routeTo="mastersetting.show"
                    tableData={billing}
                    mastersetting={mastersetting}
                    organization={organization}
                    bank={bank}
                    entity={entity}
                    packageshow={packagedata}
                    offers={offers}
                    framwork={framwork}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
