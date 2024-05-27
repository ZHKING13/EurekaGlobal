import React from "react";
import { Checkbox, Form, Input, Select } from "antd";
import { Button } from "./ui/button";
export default function DevisForme() {
    const categories = [
        { id: 1, name: "Investisseur" },
        { id: 2, name: "Startup" },
        { id: 3, name: "Très Petite Entreprise (TPE)" },
        { id: 4, name: "Petite et Moyenne Entreprise (PME)" },
        { id: 5, name: "Grande Entreprise" },
        { id: 6, name: "Personnalité Publique" },
    ];
    return (
        <div className="mx-auto w-full">
            <Form
                className="mx-auto w-full"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                layout="vertical"
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Nom et Prenom"
                    name="nom"
                    className="mx-auto"
                    rules={[
                        {
                            required: true,
                            message: "Merci de remplir ce champs",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "merci de saisir votre email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Numéro"
                    name="numero"
                    rules={[
                        {
                            required: true,
                            message: "merci de saisir votre numéro",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: "merci de sélectionner un element",
                        },
                    ]}
                    name="type"
                    label="Type d'entreprise"
                >
                    <Select>
                        {categories.map((category) => {
                            return (
                                <Select.Option value={category.name}>
                                    {category.name}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Envoyer
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
