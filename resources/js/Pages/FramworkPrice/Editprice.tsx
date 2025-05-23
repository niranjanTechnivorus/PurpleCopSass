import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Modal,
    Row,
    Form,
    Button,
    FormControl,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function Editprice({ show, setShow, framwork, currency }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: "",
        currency_id: "",
        framwork_price: "",
        id: "",
    });

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (framwork) {
            setData({
                name: framwork.name || "",
                currency_id: framwork.currency_id || "",
                framwork_price: framwork.price || "",
                id: framwork.id || "",
            });
        }
    }, [framwork]);

    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        patch(route("framworkprice.update", framwork.id), {
            data,
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
                setShowToast(true);  // Show toast message
            },
        });
        console.log(data);
    };

    return (
        <React.Fragment>
            <Modal
                show={show}
                onHide={handleClose}
                placement="start"
                id="ModalTop"
                size="lg"
            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Edit Fremwork Price
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <CardHeader>Framwork Price Details</CardHeader>
                        <form onSubmit={onSubmit}>
                            <Card.Body>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Name
                                            </Form.Label>
                                            <Form.Control
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.name ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("name", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="percentage"
                                                className="form-label"
                                            >
                                               Currency
                                            </Form.Label>
                                            <select className="form-select form-control" name="currency_id" value={data.currency_id} onChange={(e: any) => setData("currency_id", e.target.value)} required>
                                                <option value=""></option>
                                                {currency.map((item: any, index: number) => (
                                                    <option key={index} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.currency_id}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Price
                                            </Form.Label>
                                            <Form.Control
                                                id="name"
                                                name="name"
                                                value={data.framwork_price}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.framwork_price ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("framwork_price", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.framwork_price}
                                            </Form.Control.Feedback>
                                        </div>
                                        
                                       
                                        
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">
                                    <Col xl={2} md={12}>
                                        <Button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={processing}
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </form>
                    </Card>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Framework Price updated successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </React.Fragment>
    );
}
