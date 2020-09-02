import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
import renderer from 'react-test-renderer'

import thunk from "redux-thunk"
import indexComponent from "."
import { updateContact } from "./action"

const mockStore = configureStore([thunk]);

describe("Contact Actions", () => {
    let store
    let component

    beforeEach(() => {
        store = mockStore({
            listContact: []
        })

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <indexComponent />
            </Provider>
        );
    })

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findById('get__detail-contact').props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            updateContact({
                "id": "93ad6070-c92b-11e8-b02f-cbfa15db428d",
                "firstName": "Afro",
                "lastName": "Doe",
                "age": 111,
                "photo": "https://microhealth.com/assets/images/illustrations/learn-what-works-@2x.png"
            })
        );
    });
})