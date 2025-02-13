const ContactUs = () => {
    const emails = [
        "razaulkarimbd79@gmail.com",
        "chefeahyeah@gmail.com",
        "royalcrowncafe.info@gmail.com",
       
    ];

    const phoneNumbers = [
        "+880 1720-328899",
        "01625750809"
    ];

    return (
        <div className="max-w-lg p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-left mb-4">📞 Contact Us</h2>
            
            {/* Email Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold">📧 Emails:</h3>
                <ul className="list-disc pl-4">
                    {emails.map((email, index) => (
                        <li key={index} className="text-blue-600 hover:underline">
                            <a href={`mailto:${email}`}>{email}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Phone Section */}
            <div>
                <h3 className="text-lg font-semibold">📱 Phone Numbers:</h3>
                <ul className="list-disc pl-4">
                    {phoneNumbers.map((phone, index) => (
                        <li key={index} className="text-green-600 hover:underline">
                            <a href={`tel:${phone}`}>{phone}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactUs;
