export const quizes = [{
  "id": 0,
  "title": "MongoDB CRUD",
  "description": "create, read, update, and delete (CRUD) operations in the MongoDB query language",
  "icon": "mongo.svg",
  "questions": [
    {
      "id": 0,
      "question": `<p>Consider the following documents</p>
      <pre><code>{ '_id' : 1, 'a' : 1, 'b' : 1 } { '_id' : 2, 'a' : 2, 'b' : 3 } { '_id' : 3, 'a' : 3, 'b' : 6 } { '_id' : 4, 'a' : 4, 'b' : 10 } { '_id' : 5, 'a' : 5, 'b' : 15 }</code></pre>
      <p>You perform the following query:</p>
<pre><code>db.stuff.update( { b : { $gte : 10 } }, { $set : { b : 15 } }, { multi : true, upsert : true } )</code></pre>
<p>How many documents will be updated by the query?</p>`,
      "answers": [
        "0",
        "1",
        "2",
        "3",
        "5"
      ],
      "correctAnswerIndex": "1"
    },
    {
      "id": 1,
      "question": `<p>Consider the following document:</p>
<pre><code>db.c.find()
{ '_id' : 12, b : [ 3, 5, 7, 2, 1, -4, 3, 12 ] }</code></pre>
  <p>Which of the following queries on the 'c' collection will return only the first five elements of the array in the 'b' field? E.g., Document you want returned by your query:</p>
<pre><code>{ '_id' : 12, 'b' : [ 3, 5, 7, 2, 1 ] }</code></pre>`,
      "answers": [
        "db.c.find( { } , { b : [ 0, 1, 2, 3, 4, 5 ] } )",
        "db.c.find( { } , { b : [ 0 , 5 ] } )",
        "db.c.find( { } , { b : { $slice : [ 0 , 5 ] } } )",
        "db.c.find( { } , { b : { $substr[ 0 , 5 ] } } )",
        "db.c.find( { b : [ 0 , 5 ] } )"
      ],
      "correctAnswerIndex": "2"
    },
    {
      "id": 2,
      "question": `<p>Consider the following example document from the sample collection. All documents in this collection have the same schema.</p>
  <pre><code>{'_id' : 3, 'a' : 7, 'b' : 4}</code></pre>
  <p>Which of the following queries will replace this with the document,</p>
<pre><code>{'_id' : 7, 'c' : 4, 'b' : 4}</code></pre>`,
      "answers": [
        "db.sample.update( { '_id' : 3 } , { '_id' : 7 , 'c' : 4 } )",
        "db.sample.update( { '_id' : 3 } , { '$set' : { '_id' : 7 , 'c' : 4 } } )",
        "db.sample.update( { '_id' : 3 } , { '_id' : 7 , 'c' : 4 , { '$unset' : [ 'a' , 'b' ] } } )",
        "db.sample.update( { '_id' : 3 } , { '_id' : 7 , 'c' : 4 } , { 'justOne' : true } )",
        "This operation cannot be done with a single query."
      ],
      "correctAnswerIndex": "4"
    },
    {
      "id": 3,
      "question": `<p>Which of the documents below will be retrieved by the following query? Assume the documents are stored in a collection called sample. Check all that apply</p>
  <pre><code>db.sample.find( { '$or' : [ {'a' : { '$in' : [ 3, 10] } }, { 'b' : { '$lt' : 2 } } ] } )</code></pre>`,
      "answers": [
        "{ '_id' : 1, 'a' : 0, 'c' : 0, 'b' : 2 }",
        "{ '_id' : 2, 'a' : 2, 'c' : 0, 'b' : 1 }",
        "{ '_id' : 3, 'a' : 4, 'c' : 0, 'b' : 14 }",
        "{ '_id' : 4, 'a' : 5, 'c' : 0, 'b' : 17 }",
        "{ '_id' : 5, 'a' : 3, 'c' : 0, 'b' : 12 }",
        "{ '_id' : 6, 'a' : 1, 'c' : 1, 'b' : 5 }",
        "{ '_id' : 7, 'a' : 8, 'c' : 1, 'b' : 7 }",
        "{ '_id' : 8, 'a' : 11, 'c' : 1, 'b' : 0 }",
        "{ '_id' : 9, 'a' : 17, 'c' : 1, 'b' : 1 }",
        "{ '_id' : 10, 'a' : 3, 'c' : 1, 'b' : 1 }"
      ],
      "correctAnswerIndex": [
        "1",
        "4",
        "7",
        "8",
        "9"
      ]
    },
    {
      "id": 4,
      "question": `<p>You perform the following operation in the shell:</p>
    <pre><code>db.foo.insert( { } );</code></pre>
    <p>What gets inserted?</p>`,
      "answers": [
        "An empty document",
        "A document with an _id assigned to be an ObjectId",
        "A document that matches the collection's existing schema, but with null fields",
        "No document will be inserted; an error will be raised",
        "A document will be inserted with the same _id as the last document inserted"
      ],
      "correctAnswerIndex": "1"
    }
  ]
}];