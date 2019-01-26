import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import {  } from './App.actions'

const client = Stitch.initializeAppClient('brown-scheduler-lyrwc')
const initialState = {
  client: client,
  mongodb: client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('brownDB'),
  error: '',
}

export default function app(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
