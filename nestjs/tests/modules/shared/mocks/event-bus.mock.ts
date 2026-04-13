import { EventBus } from 'src/modules/shared/domain/event-bus/event-bus'
import { DomainEvent } from 'src/modules/shared/domain/event-bus/domain-event'
import { DomainEventSubscribers } from 'src/modules/shared/domain/event-bus/domain-event-subscribers'

export class EventBusMock implements EventBus {
  private publishSpy = jest.fn()

  public async publish(events: DomainEvent[]) {
    this.publishSpy(events)
  }

  public addSubscribers(subscribers: DomainEventSubscribers): void {}

  // public assertLastPublishedEventIs(expectedEvent: DomainEvent) {
  //   const publishSpyCalls = this.publishSpy.mock.calls
  //   expect(publishSpyCalls.length).toBeGreaterThan(0)

  //   const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1]
  //   const lastPublishedEvent = lastPublishSpyCall[0][0]

  //   const expected = this.getDataFromDomainEvent(expectedEvent)
  //   const published = this.getDataFromDomainEvent(lastPublishedEvent)

  //   expect(expected).toMatchObject(published)
  // }

  // private getDataFromDomainEvent(event: DomainEvent) {
  //   const { eventId, occurredOn, ...attributes } = event

  //   return attributes
  // }

  public assertPublishedEvents(expectedEvents: DomainEvent[]) {
    const publishSpyCalls = this.publishSpy.mock.calls
    expect(publishSpyCalls.length).toBeGreaterThan(0)

    const publishedEvents = publishSpyCalls.flatMap(call => call[0])
    expect(publishedEvents).toEqual(expect.arrayContaining(expectedEvents))
  }

  public assertNotPublished(): void {
    expect(this.publishSpy).not.toHaveBeenCalled()
  }

  public whenPublishSuccess(): void {
    this.publishSpy.mockResolvedValue(undefined)
  }

  public whenPublishFailure(error: Error): void {
    this.publishSpy.mockRejectedValue(error)
  }
}
