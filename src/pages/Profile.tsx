import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { getCurrentUser, updateUserAttribute } from 'aws-amplify/auth';
import awsExports from '../aws-exports';
import { type UpdateUserAttributeOutput } from 'aws-amplify/auth';

Amplify.configure(awsExports);

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        userId: '',
        signInDetails: {},
        role: 'sponsor',
    });
    const [attributes, setAttributes] = useState({ username: '', email: '', custom: { role: 'sponsor' } });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser() as any;
                const { username, signInDetails } = currentUser;
                const userId = currentUser.sub;
                const attributes = currentUser.attributes || {};

                setUserInfo({ username, userId, signInDetails, role: attributes['custom:role'] || 'sponsor' });
                setAttributes({
                    username: username || '',
                    email: attributes.email || '',
                    custom: { role: attributes['custom:role'] || 'sponsor' }
                });
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };   
        fetchUser();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name.startsWith('custom:')) {
            setAttributes((prev) => ({
                ...prev,
                custom: { ...prev.custom, [name]: value }
            }));
        } else {
            setAttributes((prev) => ({ ...prev, [name]: value }));
        }
    };

    async function handleUpdateUserAttribute(attributeKey: string, value: string) {
        try {
            console.log(`Attempting to update attribute: ${attributeKey} with value: ${value}`);
            
            const output = await updateUserAttribute({
                userAttribute: {
                    attributeKey,
                    value,
                },
            });
            handleUpdateUserAttributeNextSteps(output);
        }catch (error: any) {
            // Log the full error response for debugging purposes
            console.error(`Error updating attribute: ${attributeKey}`, error.response || error);
            setMessage(`Failed to update ${attributeKey}. Please check permissions or formatting.`);
        }
    }
    

    function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
        const { nextStep } = output;

        switch (nextStep.updateAttributeStep) {
            case 'CONFIRM_ATTRIBUTE_WITH_CODE':
                const codeDeliveryDetails = nextStep.codeDeliveryDetails;
                console.log(
                    `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
                );
                break;
            case 'DONE':
                console.log(`Attribute was successfully updated.`);
                break;
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handleUpdateUserAttribute('username', attributes.username);
        handleUpdateUserAttribute('email', attributes.email);
        handleUpdateUserAttribute('custom:role', attributes.custom.role);
        
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {userInfo.username}</p>
            <p>User ID: {userInfo.userId}</p>
            <p>Sign-In Details: {JSON.stringify(userInfo.signInDetails)}</p>
            <p>Role: {userInfo.role}</p>
            <hr />

            <h2>Update Profile Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={attributes.username || userInfo.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={attributes.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Role:
                    <select
                        name="custom:role"
                        value={attributes.custom.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="driver">Driver</option>
                        <option value="sponsor">Sponsor</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default withAuthenticator(Profile);
