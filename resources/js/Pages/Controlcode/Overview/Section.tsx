import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import ControlTab from "./ControlTab";

const Section = ({
  allEvidence,
  allPolicies,
  controlcode,
  control_policies,
  control_evidence,
}: any) => {
  return (
    <React.Fragment>
      <Tab.Container defaultActiveKey="1">
        <Row>
          <Col lg={12}>
            <Card className="mt-n4 mx-n4">
              <div className="bg-primary-subtle">
                <Card.Body className="pb-0 px-4">
                  <Row className="mb-3">
                    <div className="col-md">
                      <Row className="align-items-center g-3">
                        <div className="col-md">
                          <div>
                            <h4 className="fw-bold">{controlcode.name}</h4>
                            <div className="hstack gap-3 flex-wrap">
                              <div>{controlcode.code}</div>
                              <div className="vr"></div>
                              <div>
                                Created at :{" "}
                                <span className="fw-medium">
                                  {controlcode.created_at}
                                </span>
                              </div>
                              <div className="vr"></div>

                              <div className="vr"></div>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                    <div className="col-md-auto">
                      <div className="hstack gap-1 flex-wrap">
                        <button
                          type="button"
                          className="btn py-0 fs-16 favourite-btn active"
                        >
                          <i className="ri-star-fill"></i>
                        </button>
                        <button
                          type="button"
                          className="btn py-0 fs-16 text-body"
                        >
                          <i className="ri-share-line"></i>
                        </button>
                        <button
                          type="button"
                          className="btn py-0 fs-16 text-body"
                        >
                          <i className="ri-flag-line"></i>
                        </button>
                      </div>
                    </div>
                  </Row>
                  <Nav
                    className="nav-tabs-custom border-bottom-0"
                    role="tablist"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="1">Overview</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Tab.Content className="text-muted">
              <Tab.Pane eventKey="1">
                <ControlTab
                  controlcode={controlcode}
                  allEvidence={allEvidence}
                  allPolicies={allPolicies}
                  control_policies={control_policies}
                  control_evidence={control_evidence}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </React.Fragment>
  );
};

export default Section;
