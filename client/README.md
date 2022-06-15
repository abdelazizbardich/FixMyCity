# FixMyCity

loresm...

# Components:
- Datatable:
  - Columns:
      ```ts
        cols:[] = ["COLUMN_NAME","COLUMN_NAME","COLUMN_NAME","COLUMN_NAME"]
      ``` 
  - Data:
    ```ts
    data:[] = [
      {key:"CELL_KEY",val:"CELL_VALUE"},
      {key:"actions",actions:[
        {action:"view",id:"ROW_ID"},
        {action:"edit",id:"ROW_ID"},
        {action:"delete",id:"ROW_ID"}
      ]}
    ]
    ```
  - Actions methods:
    - onView:
    - onEdit:
    - onDelete:
