import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function EventCard({ title, location, cId, id }) {
  return (
    <>
      <Card className={`border-0 hover-shadow mb-3`}>
        <Card.Img variant="top" src="https://fakeimg.pl/600x320/" />
        <Card.Body className="px-2">
          <Card.Title className="mb-2 pb-2 pb-md-0 border-bottom border-bottom-md-0 fs-md-lg">
            <Link to={`/events/vendor/${id}`} className="link-btn">
              {title}
            </Link>
          </Card.Title>
          <Card.Text className="d-none d-md-block mb-2 fs-sm text-m">
            風華絕代五十年，山蔭長歌採茶人，香濃韻清照顏色 ......
          </Card.Text>
          <Card.Text className="d-flex justify-content-between fs-xs text-m">
            <Link to="/vendors/和菓森林">{cId}</Link>
            <span>
              <i className="fas fa-map-marker-alt fa-sm mr-1" />
              {location}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
