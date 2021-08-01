export class EquivalencePartitioningTutorial {
  public title!: string;
  public slug!: string;
  public tutorialType!: string;
  public difficulty!: number;
  public userStory!: string;
  public acceptanceCriteria!: string[];
  public partitions!: Partition[];
  public formControls!: FormControl[];
}

export class Partition {
  public type!: string;
  public description!: string;
  public example!: string;
  public exampleDescription!: string;
}

export class FormControl {
  public type!: string;
  public showCount!: boolean;
  public label!: string;
  public placeholder!: string;
  public validations!: Validation[];
}

export class Validation {
  public errorType!: string;
  public regex!: string;
  public message!: string;
  public config?: any;
  public bug!: Bug;
}

export class Bug {
  public hasBug!: boolean;
  public config!: null;
}


export class TryPartition {
  public type!: string;
  public notes!: string;
}
