"use client"
import MobileContainer from '@/components/MobileContainer'
import { useRouter } from 'next/navigation'

import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

function Privacy() {
    const router = useRouter()
    return (
        <>
            <MobileContainer>
                <div className="disclaimer w-full min-h-screen flex flex-col justify-start items-center relative " style={{ backgroundImage: "url('/images/bg.png')", backgroundSize: "cover" }}>
                <div className="SocialMedia-header w-full bg-white/100 mb-7 box-shodow-lg box-shagow-black flex flex-col  ">
                        <MdArrowBackIosNew className='text-lg cursor-pointer absolute top-6 left-5 text-black z-50'   onClick={() => router.back()} />
                        <h1 className=' text-xl text-center font-bold mt-5 drop-shadow-lg text-black mb-4'>Privacy Policy</h1>
                </div>

                    <div className="disclaimer-container w-auto mr-3 ml-3 flex flex-col  justify-center text-justify bg-white shadow-lg p-1 rounded-xl mb-5">
                        <p className='text-sm p-2'>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells you about your privacy rights and how the law protects you. We use Your Personal data to provide and Improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                        <p className="text-sm p-2 ">Interpretation and Definitions:</p>
                        <p className="text-sm p-2">Interpretation</p>
                        <p className="text-sm p-2">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                        <p className="text-sm p-2">Definitions</p>
                        <p className='text-sm p-2'>For the purposes of this Privacy Policy:<br/> Account means a unique account created for You to access our Service or parts of our Service.
                         Affiliate means an entity that controls, is controlled by or is undercomman control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. Application refers to INTUC Thrissur, the software program provided by the company.</p>
                        <p className='text-sm p-2'> Company (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to PLUS IT BUSINESS PARK, RVK Tower, High Rd, South Bazar, Erinjery Angady, Pallikkulam, Thrissur, Kerala 680001. Country refers to: Kerala, India.</p>
                        <p className='text-sm p-2'>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet. Personal Data is any information that relates to an identified or identifiable individual.<br/> Service refers to the Application.<br/> Service Provider means ony natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or Individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit). You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        <p className='text-sm p-2'>Collecting and Using Your Personal Data</p>
                        <p className='text-sm p-2'>Types of Data Collected</p>
                        <p className='text-sm p-2'>Personal Data:</p>
                        <p className='text-sm p-2'>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:<br/> Email address<br/> Phone number <br/> Address, State, Province, ZIP/Postal code, City</p>
                        <p className='text-sm p-2'>Usage Data:</p>
                        <p className='text-sm p-2'>Usage Data is collected automatically when using the Service.Usage Data may include
                        information such as Your Device's
                        Internet Protocol address (eg. IP address).
                        browser type, browser version, the pages of our
                        Service that You visit, the time and date of Your
                        visit, the time spent on those pages, unique
                        device identifiers and other diagnostic data.
                        When You access the Service by or through a
                        mobile device, We may collect certain
                        Information automatically including but not
                        limited to, the type of mobile device You use,
                        Your mobile device unique ID the IP address of
                        Your mobile device, Your mobile operating
                        system, the type of mobile intenet browser You
                        use, unique device identifiers and other
                        diagnostic data. We may also collect information
                        that your browser sends whenever You visit our
                        Service or when you access the Service by or
                        through a mobile device. Information Collected
                        while Using the Application While using Our
                        Application, in order to provide features of Our
                        Application, We may collect, with Your prior
                        permission Information regarding your location.
                        Pictures and other information from your
                        Device's camera and photo library
                        We use this information to provide features of
                        Our Service, to improve and customize Our
                        Service The information may be uploaded to the
                        Company's servers and/or a Service Provider's
                        server or it may be simply stored an Your
                        device. You can enable or disable access to this
                        Information at any time, through Your Device
                        settings.
                        </p>
                        <p className='text-sm p-2'>Use of Your Personal Data</p>
                        <p className='text-sm p-2'>The Company may use Personal Data for the following purposes: To provide and maintain our
                        Service, including to monitor the usage of our Service.</p>
                        <p className='text-sm p-2'>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user,the development,
                        compliance and undertaking of the purchase
                        contract for the products, items or services You
                        have purchased or of any other contract with Us
                        through the Service.</p>
                        <p className='text-sm p-2'>To contact You: To contact You by email,
                        telephone calls, SMS, or other equivalent forms
                        of electronic communication, such as a mobile
                        application's push notifications regarding
                        updates or informative communications related
                        to the functionalities, products or contracted
                        services, including the security updates, when
                        necessary of reasonable for their
                        implementation. To provide You with news,
                        special offers and general information about
                        other goods, services and events which we offer
                        that are similar to those that you have already
                        purchased or enquired about unless You have
                        opted not to receive such information. To manage Your requests: To attend and manage
                        Your requests to Us. For business transfers: We
                        may use Your information to evaluate or conduct
                        a merger, divestiture, restructuring,
                        reorganization, dissolution, or other sale or
                        transfer of some or all of Our assets, whether as
                        a going concern or as part of bankruptcy,
                        liquidation, or similar proceeding, in which
                        Personal Data held by Us about our Service
                        users is among the assets transferred.</p>
                        <p className='text-sm p-2'>For other purposes: We may use Your
                        information for other purposes such as data
                        analysis, identifying usage trends, determining
                        the effectiveness of our promotional campaigns
                        and to evaluate and improve our Service,
                        products, services, marketing and your
                        experience. We may share Your personal
                        information in the following situations:<br/>
                        <b>With Service Providers:</b> We may share Your
                        personal information with Service Providers to
                        monitor and analyze the use of our Service, to
                        contact You.<br/>
                        <b>For business transfer:</b>We may share or
                        transfer Your personal information in connection
                        with, or during negotiations of, any merger, sale
                        of Company assets, financing, or acquisition of
                        all or a portion of Our business to another company.<br/>
                        <b>With Affiliates:</b> We may share Your
                        Information with Our affiliates, in which case we
                        will require those affiliates to honor this Privacy
                        Policy Affiliates include Our parent company and
                        any other subsidiaries, joint venture partners or
                        other companies that We control or that are
                        under common control with Us.<br/>
                        <b>With business partners:</b> We may share Your
                        Information with Our business partners to offer
                        You certain products, services ur promotions.<br/>
                        <b>With other users:</b> when You share personal
                        information or otherwise interact in the public
                        areas with other users, such information may be
                        viewed by alll users and may be publicly
                        distributed outside.<br/>
                        <b>With Your consent:</b>We may disclose Your
                    personal information for any other purpose with
                    Your consent. Retention of Your Personal Data
                    The Company will retain Your Personal Date only
                    for as long as is necessary for the purposes set
                    out in this Privacy Policy. We will retain and use
                    Your Personal Data to the extent necessary to
                    comply with our legal obligations (for example,
                    if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and
                    enforce our legal agreements and policies.
                    The Company will also retain Usage Data or
                    internal analysis purposes. Usage Data i
                    generally retained for a shorter period of time,
                    except when this data is used to strengthen the
                    security or to improve the functionality of Our
                    Service, or We are legally obligated to retain this
                    data for longer time periods.
                    Transter of Your Personal Data
                    Your information, including Personal Datu, is
                    processed at the Company's operating offices
                    and in any other places where the parties.
                    Involved in the processing are located. It means
                    that this information may be transferred to-
                    and maintained on-computers located outside
                    of Your state, province, country or other
                    governmental jurisdiction where the data
                    protection laws may differ than those from
                    Your jurisdiction
                    Your consent to this Privacy Policy followed by
                    Your submission of such information represents
                    Your agreement to that transfer. The Company
                    will take all steps reasonably necessary to
                    ensure that Your data is treated securely and in
                    accordance with this Privacy Policy and no
                    transfer of Your Personal Data will take place to
                    an organization or a country unless there are
                    adequate controls in place including the security
                    of Your data and other personal information. 
                    </p>
                    <p className='text-sm p-2'>Delete  Your Persanal Data</p>
                    <p className='text-sm p-2'>You have the right to delete or request that We
                        assist in deleting the Personal Data that We
                        have collected about You Our Service may give
                        You the ability to delete certain information
                        about You from within the Service You may
                        update, amend, or delete Your information at any
                        time by signing in to Your Account, if you have
                        one, and visiting the account settings section.
                        that allows you to manage Your personal
                        information. You may also contact Us to request
                        access to, correct, or delete any personal
                        information that You have provided to Us. Please
                        note, however, that We may need to retain
                        certain information when we have a legal
                        obligation or lawful basis to do so.</p>
                        <p className='text-sm p-2'>Disclosure of Your Personal Data</p>
                        <p className='text-sm p-2'>Business Transactions</p>
                        <p className='text-sm p-2'>If the Company is involved in a merger,
                        acquisition or asset sale, Your Personal Data
                        may be transferred. We will provide notice.
                        before Your Personal Data is transferred and
                        becomes subject to a different Privacy Policy.</p>
                        <p className='text-sm p-2'>Law enforcement</p>
                        <p className ='text-sm p-2'>Under certain circumstances, the Company may
                        be required to disclose Your Personal Dala if
                        required to do so by law or in response to valid
                        requests by public authorities (eg, a court ora
                        government agency)</p>
                        <p className='text-sm p-2'>Other legal requirements</p>
                        <p className='text-sm p-2'>The Company may disclose Your Personal Data n the good faith beitef that such action is necessary to:</p>
                        <ul className='text-sm p-5 list-disc'>
                            <li>Comply with a legal obligation</li>
                            <li>Protect and defend the rights or property of the Company</li>
                            <li>Prevent or investigate possible wrong doing in
                            connection with the Service. Protect the personal safety of Users of the Service or the public</li>
                            <li>Protect against legal liability</li>
                        </ul>
                        <p className='text-sm p-2'>Security of Your Personal Data</p>
                        <p className='text-sm p-2'>The security of Your Personal Data is Important
                        to Us, but remember that no method of
                        transmission over the internet, or method of
                        electronic storage is 100% secure. While We
                        strive to use commercially acceptable means to
                        protect Your Personal Data, We cannot
                        guarantee its absolute security.</p>
                        <p className='text-sm p-2'>Children's Privacy</p>
                        <p className='text-sm p-2'>Our Service does not address anyone under the
                        age of 13. We do not knowingly collect
                        personally identifiable information from anyone
                        under the age of 13. If You are a parent or
                        guardian and You are aware that Your child has
                        provided Us with Personal Data, please contact
                        Us. If We become aware that We have collected
                        Personal Data from anyone under the age of 13
                        without verification of parental consent, We take
                        steps to remove that information from Our
                        servers If We need to rely on consent as a legal
                        basis for processing Your information and Your
                        country requires consent from a parent. We may
                        require Your parent's consent before We collect
                        and use that information.</p>
                        <p className='text-sm p-2'>Links to Other Websites</p>
                        <p className='text-sm p-2'>Our Service may contain links to other websites
                        that are not operated by Us, If You click on a
                        third party link, You will be directed to that third
                        party's sile. We strongly athise You to review the
                        Privacy Policy of every site You visit. We have no
                        control over and assume no responsibility for
                        the content privacy policies or practices of any
                        third party sites or services. Changes to this
                        Privacy Policy We may update Our Privacy Policy
                        from time to time. We will notify You of any
                        changes by posting the new Privacy Policy on
                        this page We will let You know via email and/or
                        a prominent notice on Our Service,prior to the
                        change becoming effective and update the 'Last
                        updated date at the top of this Privacy
                        Policy. You are advised to review this Privacy
                        Policy periodically for anychanges. Changes to
                        this Privacy Policy are effective when they are
                        posted on this page</p>
                    </div>
                </div>
            </MobileContainer>
        </>
    )
}

export default Privacy