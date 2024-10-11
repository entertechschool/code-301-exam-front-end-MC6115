import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function Items(props) {

  return (
    <section>
      <h2>Items</h2>
      <Accordion defaultActiveKey="0">
        {props.itemsList.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={item._id}>
            <Accordion.Header>{item.name}</Accordion.Header>
            <Accordion.Body>
              <p>{item.description}</p>
              <Button
                variant="danger"
                onClick={() => props.handleDeleteItem(item)}
                data-testid={`delete-button-${item.name}`}
              >
                Delete Item
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default Items;
