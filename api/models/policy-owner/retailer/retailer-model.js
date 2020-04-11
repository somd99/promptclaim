const PolicyOwner = require('../policy-owner-model');
const checkType = require('../../utils').checkType;

module.exports = class Retailer extends PolicyOwner {
    constructor({ policyOwnerId = null, ownerType = null, retailerId = null, name = null, contact = null, hqAddress = null, retailerDescription = null } = {}) {
        // their own class atrribute ref. from class diagram
        super(policyOwnerId, ownerType);
        this._retailerId = retailerId;
        this._name = name;
        this._retailerDescription = retailerDescription;
        this._contact = contact;
        this._hqAddress = hqAddress;
        // their relationships to its neighbor ref. from class diagram
        this._retailerBranch = [];  // relationship to RetailerBranch
        this._rootAccount = null;   // relationship to RootAccount 
    }

    // DM layer CRUD
    _create() {
        return db.execute('INSERT INTO retailer(retailer_id, contact, name, hq_address, retailer_description, root_id, policy_owner_id) VALUES (?,?,?,?,?,?,?)',
            [this._retailerId, this._name, this._contact, this._hqAddress, this._retailerDescription, this._rootAccount, this.policyOwnerId]
        );
    }

    static _read() {
        return db.execute('SELECT * FROM retailer');
    }

    static _readByRetailerId(retailerId) {
        return db.execute('SELECT * FROM retailer WHERE retailer_id = ?', [retailerId]);
    }

    _update() {
        return db.execute('UPDATE retailer SET contact = ?, name = ?, hq_address = ?, retailer_description = ?, root_id = ?, policy_owner_id = ? WHERE retailer_id = ?',
            [this._contact, this._name, this._hqAddress, this._retailerDescription, this._rootAccount, this.PolicyOwner, this._retailerId]
        );
    }

    _delete() {
        return db.execute('DELETE FROM retailer WHERE retailer_id = ?', [this._retailerId]);
    }

    // getter and setter
    getProperty() {
        return {
            policyOwnerId = this.policyOwnerId,
            ownerType = this.ownerType,
            retailerId = this._retailerId,
            name = this._name,
            retailerDescription = this._retailerDescription,
            contact = this._contact,
            hqAddress = this._hqAddress,
            retailerBranch = this._retailerBranch,
            rootAccount = this._rootAccount
        };
    }

    setProperty({ // set only its own attributes
        // destructuring object as parameter by using old values as a default.
        policyOwnerId = this.policyOwnerId,
        ownerType = this.ownerType,
        retailerId = this._retailerId,
        name = this._name,
        retailerDescription = this._retailerDescription,
        contact = this._contact,
        hqAddress = this._hqAddress
    }) {
        // check datatype
        checkType(policyOwnerId, 'String');
        checkType(ownerType, 'String');
        checkType(retailerId, 'String');
        checkType(name, 'String');
        checkType(retailerDescription, 'String');
        checkType(contact, 'String');
        checkType(hqAddress, 'String');
        // assign to private variables
        this.policyOwnerId = policyOwnerId;
        this.ownerType = ownerType;
        this._retailerId = retailerId;
        this._name = name;
        this._retailerDescription = retailerDescription;
        this._contact = contact;
        this._hqAddress = hqAddress;
    }
}

